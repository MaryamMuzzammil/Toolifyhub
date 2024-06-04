 //! A IIFE function to convert the PNG file to JPG
 const PNG_to_JPG_converter = (() => {
    function converter(imageFileBlob, options) {
      options = options || {}
  
      //* Creating a canvas element and then putting the image (png) there
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")
      const imageElement = createImage()
      const downloadLink = document.createElement("a")
  
      //* Here we create our image blob
      function createImage(options) {
        options = options || {}
        const img = document.createElement("img")
  
        img.style.width = options.width ? `${options.width}px` : "auto"
        img.style.height = options.height ? `${options.height}px` : "auto"
  
        return img
      }
  
      function updateDownloadLink(pngFileName, jpgBlob) {
        const linkElement = downloadLink
        const jpgFileName = pngFileName.replace(/png/i, "jpg")
  
        linkElement.setAttribute("download", jpgFileName)
        linkElement.href = URL.createObjectURL(jpgBlob)
  
        downloadLink.click()
      }
  
      function process() {
        const imageUrl = URL.createObjectURL(imageFileBlob)
  
        imageElement.addEventListener("load", e => {
          canvas.width = e.target.width
          canvas.height = e.target.height
          context.drawImage(e.target, 0, 0, e.target.width, e.target.height)
          canvas.toBlob(
            updateDownloadLink.bind(window, imageFileBlob.name),
            "image/jpeg"
          )
        })
  
        imageElement.src = imageUrl
      }
  
      return {
        process: process,
      }
    }
  
    return converter
  })()
  
  //HTML image file field
  const imageFileElement = document.querySelector(".png-upload-input")

  //Add file change event handler
  imageFileElement.addEventListener("change", event => {
    const pngImageFileBlob = event.currentTarget.files[0]
  
    //Validating if the file's type is PNG or different
    if (pngImageFileBlob.type.match(/image\/png/i) !== null) {
      PNG_to_JPG_converter(pngImageFileBlob).process()
    } else {
      alert(
        `Invalid PNG image file! Got an image with type ${pngImageFileBlob.type}`
      )
    }
  })