
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var street = $("#street").val();
    var city = $("#city").val();
    var urlString = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + street + ", " + city;
    
    var imgTag = "<img class='bgimg' src='" + urlString + "'>";
    $body.append(imgTag);
    $greeting.text("So you wanna live on " + street + ", in " + city + ", huh?");

    return false;
};

$('#form-container').submit(loadData);
