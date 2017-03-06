//RSS Feeds
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //checking length  of allfeeds array is not equal to zero
            expect(allFeeds.length).not.toBe(0);
        });

        it('url present', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0); //checking wether the url is defined or not and it should not be equal to 0;
                expect(allFeeds[i].url).not.toBe(null);
            }
        });

        it('name is defined and not null', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
                expect(allFeeds[i].name).not.toBe(null);
            }
        });
    });

    //The menu
    describe('The menu', function() {
        it('menu element is hidden by default ', function() {
            expect($('body').hasClass("menu-hidden")).toBe(true); //checking wether class menu-hidden is present or not
        });
        it('menu changes its visibility when clicked', function() {
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(false); //when click on menu icon menu should open
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(true); //when again click on menu icon it shoul close
        });
    });

    //initial Enteries
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() { //loading feeds
                done();
            });
        });

        it(' has minimum entry of 1', function(done) {
            expect($('.feed .entry').length > 0).toBe(true); //check wether length of feed to be greater than true
            done();
        });
    });

    //New Feed Selection
    describe('New Feed Selection', function() {
        var previousfeed;
        var newfeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                previousfeed = $('.feed').html(); //on load fetching feed
                loadFeed(1, function() { //use nested loops to be asynchronous.
                    newfeed = $('.feed').html(); //on reload fetching feed
                    done();
                });
            });
        });

        it('nextFeed is not equal to previousfeed', function() {
            expect(previousfeed).not.toEqual(newfeed); // old and new feed is not same
        });
    });


}());
