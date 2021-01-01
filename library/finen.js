        var renderingEngine = function() {
            var prefix = (Array.prototype.slice
                .call(window.getComputedStyle(document.documentElement, ''))
                .join('')
                .match(/-(webkit|moz|ms|o)-/)
            )[1];
            var engine;
            if (prefix === "webkit") {
                engine = "webkit";
            } else if (prefix === "moz") {
                engine = "gecko";
            } else if (prefix === "ms") {
                engine = "trident";
            } else if (prefix === "o") {
                engine = "presto";
            } else {
                engine = undefined;
            }
            return engine;
        }
