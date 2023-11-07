const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear'); // New element for year input
const btn = document.querySelector('button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favouriteMovieYear'); // New element to display year

let TitleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year'); // New variable to retrieve year from storage

if (TitleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = TitleInStorage;
    movieYearToDisplay.textContent = `Year: ${yearInStorage}`; // Display year
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.483), rgba(187, 142, 142, 0.303)),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let yearInput = movieYear.value; // New variable to get year input

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', yearInput); // Store year in local storage

    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = `Year: ${yearInput}`; // Display year
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.483), rgba(187, 142, 142, 0.303)),
    url('${posterUrlInput}')`;

    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = ''; // Clear year input field
});
