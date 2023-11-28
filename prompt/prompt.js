const API_KEY = 'SUA_API_KEY';
const submit = document.querySelector("submit")
const prompt = document.getElementById('prompt')
const imageSection = document.getElementById('image-container')

const getImages = async () => {
    showLoading();
    imageSection.innerHTML = ''
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            "prompt": prompt.value,
            "n": 1,
            "size": "1024x1024",
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options)
        const data = await response.json()
        hideLoading();
        data?.data.forEach(imageObject => {
            const Image = document.createElement('div')
            Image.classList.add('image-container')
            const ImageElement = document.createElement('img')
            ImageElement.setAttribute('src', imageObject.url)
            Image.append(ImageElement)
            imageSection.appendChild(Image)

        });
    } catch (error) {
        console.error(error)
    }
}

prompt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Para evitar que o formulário seja submetido
        getImages();
    }
});