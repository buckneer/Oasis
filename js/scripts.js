document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.getElementById('navbar_top');
    let navbarContainer = document.getElementById('navbar_container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {

            // Fixed Top
            navbar.classList.add('fixed-top');

            //Background
            navbar.classList.add('bg-light');

            // Shadow 
            navbar.classList.add('shadow')

            // Size
            navbar.classList.remove('py-3')
            navbar.classList.add('py-1')

            // Container
            navbarContainer.classList.remove('container');
            navbarContainer.classList.add('container-fluid');

            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {

            // Fixed Top
            navbar.classList.remove('fixed-top');

            // Background
            navbar.classList.remove('bg-light');

            // Shadow 
            navbar.classList.remove('shadow')

            // Size
            navbar.classList.add('py-3');
            navbar.classList.remove('py-1')

            // Container
            navbarContainer.classList.remove('container-fluid');
            navbarContainer.classList.add('container');

            document.body.style.paddingTop = '0';
        }
    });
});


// Drag and Drop system
const dropArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.getElementById("browse")
let input = dropArea.querySelector('input');

let file;

// when file is inside drag area
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('active');
    dragText.textContent = 'Release to Upload';
    // console.log('File is inside the drag area');
});

// when file leave the drag area
dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
    // console.log('File left the drag area');
    dragText.textContent = 'Drag & Drop';
});


// when file is dropped
dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    // console.log('File is dropped in drag area');

    file = event.dataTransfer.files[0]; // grab single file even of user selects multiple files
    // console.log(file);
    // displayFile();
});

button.onclick = () => {
    input.click();
};

// when browse
input.addEventListener('change', function() {
    file = this.files[0];
    dropArea.classList.add('active');
});