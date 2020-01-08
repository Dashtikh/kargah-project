$(document).ready(function() {
    $('.change-button').click(function() {
        let card = $('#card-'+this.id)[0];

        let title = card.getAttribute('title');;
        let description = card.getAttribute('dscr');;
        let src = card.getAttribute('src');

        let image = $('#preview-image')[0];
        console.log(image);
        
        $('#preview-image').attr('src', './assets/images/' + src);
        $('#preview-title').html(title);
        $('#preview-description').html(description);
        
    })
})