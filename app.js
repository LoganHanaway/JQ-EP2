const $addMovie = $('#addMovie')
const $filmList = $('#filmList')


const getValues = () => {
    const title = $('#title').val()
    const rating = $('#rating').val()
    const $newMovie = `${title}: ${rating}/10 `
    $('<li></li>').text($newMovie).appendTo($filmList).append('<button id="remove" type="submit">Remove</button>').on('click', function(){
        $(this).remove()
    })
}

$addMovie.on('click', function(e){
    e.preventDefault();
    getValues()
})

