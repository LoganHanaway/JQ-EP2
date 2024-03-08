const $addMovie = $('#addMovie');
const $filmList = $('#filmList');
const $sort = $('#sort');


const getValues = () => {
    const title = $('#title').val();
    const titleLength = $('#title').val().length;
    const rating = $('#rating').val();
    const $newMovie = `${title}: ${rating}/10 `;

    if(titleLength < 2){
        alert('Movie title must be longer than two characters');
        return;
    };

    $('<li></li>').text($newMovie).appendTo($filmList).append('<button id="remove" type="submit">Remove</button>').on('click', function(){
        $(this).remove();
    });
};

$addMovie.on('click', function(e){
    e.preventDefault();
    getValues();
})

$sort.on('click', function(e){
    e.preventDefault();;
    sortOptions();
});

const sortOptions = () => {

}