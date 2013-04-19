(function() {
    var map = Array.prototype.map;

    var Placeholder = window.Placeholder = function() {
        this.VERSION = '0.0.1';

        if (window.location.toString().indexOf("images") >= 0) {
            var query     = getUrlVariables(),
                doc       = document.documentElement,
                imageMode = query["images"],
                images = document.getElementsByClassName('imagefill');

            if(doc.className) {
                doc.className += ' fillimages-' + imageMode;
            } else {
                doc.className = 'fillimages';
            }

            map.call(images, function(el) {
                var width  = el.width,
                    height = el.height;
                el.src = retrieveImages(imageMode, width, height);
            });
        }
        return this;
    };

    // Returns object with key/value pairs matching query string variables
    var getUrlVariables = function() {
         var query = {},
             pairs = location.search.slice(1).split('&');

        pairs.map(function(pair) { 
             pair = pair.split('=');
             query[pair[0]] = pair[1] || ''; 
         });

        return(query);
    };

    var retrieveImages = function (type, width, height) {
        switch(type) {
            case "filler":
                return "http://placehold.it/"+width+"x"+height;
            break;
            case "stock":
                var options = ["abstract","animals","business","cats","city","food","nightlife","fashion","people","nature","sports","technics","transport","baby"],
                    imgtype = options[Math.floor(Math.random() * options.length)];
                if (imgtype == "baby") {
                    return "http://i1067.photobucket.com/albums/u437/redlinederby/smile_zps1fefe79f.jpg";
                } else {
                    return "http://lorempixel.com/"+width+"/"+height+"/"+imgtype;
                }
            break;
            case "baby":
                return "http://i1067.photobucket.com/albums/u437/redlinederby/smile_zps1fefe79f.jpg";
            break;
            default:
                return "http://lorempixel.com/"+width+"/"+height+"/"+type+"?random="+Math.random();
            break;
        }
        return this;
    };

}).call(this);
