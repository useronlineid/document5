function saveImage() {
    const inputs = [
        document.getElementById('input1').value,
        document.getElementById('input2').value,
        document.getElementById('input3').value,
        document.getElementById('input4').value,
        document.getElementById('input5').value,
        document.getElementById('input6').value || document.getElementById('inputCustomNote').value
    ];

    const params = new URLSearchParams();
    inputs.forEach((input, index) => {
        params.append(`input${index + 1}`, input);
    });

    window.location.href = `output.html?${params.toString()}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const outputs = [
        document.getElementById('output1'),
        document.getElementById('output2'),
        document.getElementById('output3'),
        document.getElementById('output4'),
        document.getElementById('output5'),
        document.getElementById('output6')
    ];

    outputs.forEach((output, index) => {
        output.textContent = urlParams.get(`input${index + 1}`);
    });

    const imageURL = "https://github.com/useronlineid/document5/blob/main/png.png?raw=true"; // ใส่ URL ของรูปภาพพื้นหลังที่คุณอัปโหลดไปใน GitHub
    document.body.style.backgroundImage = `url(${imageURL})`;
});
