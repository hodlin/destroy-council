var game = new function() {

    var          GAME_FIELD = null,
                FIELD_WIDTH = 81,
               FIELD_HEIGHT = 60,
             ENEMY_ELEMENTS = [],
            SHOOTS_ELEMENTS = [],
                       SHIP = [],
                 GAME_SPEED = 100,
                   Interval = null;
    
    var check_hit = function () {
        
    }
    
    var update_enemy = function () {
        check_hit();
        
        
    }
    
    var update_shots = function() {
        
    }
    
    var update_view = function () {
        
    }
    
    var key_pressed = function() {
        // Handling key events
        
        update_view();
    }
    
    var check_defeat = function () {
        
    }
    
    var update = function() {
        update_enemy();
        update_shots();
        
        check_defeat();
        update_view();
    }
    
    var start_game = function() {
        clearInterval(Interval);
        Interval = setInterval(update, GAME_SPEED);
    }
    
    this.init = function() {
        GAME_FIELD = document.getElementById("field");
        enemy_init();
        ship_init();
        
        start_game();
        
    }

    var ship_init = function () {

    }

    var enemy_init = function () {

    }

}