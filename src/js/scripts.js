(function(){
    var heart = Snap('#mysvg');
    var points = [
        {x: 299, y: 62,  radius: 3, color: '#7a1c29'}, //1
        {x: 434, y: 58,  radius: 4, color: '#7a1c29'}, //2
        {x: 530, y: 132, radius: 3, color: '#7a1c29'}, //3
        {x: 628, y: 53,  radius: 3, color: '#7a1c29'}, //4
        {x: 742, y: 53,  radius: 3, color: '#7a1c29'}, //5
        {x: 814, y: 128, radius: 5, color: '#7a1c29'}, //6
        {x: 836, y: 249, radius: 3, color: '#7a1c29'},
        {x: 779, y: 337, radius: 4, color: '#7a1c29'}, //8
        {x: 529, y: 567, radius: 4, color: '#7a1c29'}, //9
        {x: 302, y: 360, radius: 3, color: '#7a1c29'}, //10
        {x: 224, y: 270, radius: 5, color: '#7a1c29'},
        {x: 222, y: 148, radius: 5, color: '#7a1c29'},
        {x: 299, y: 62,  radius: 5, color: '#7a1c29'},
        {x: 373, y: 87,  radius: 3, color: '#7a1c29'},
        {x: 434, y: 58,  radius: 7, color: '#7a1c29'},
        {x: 373, y: 87,  radius: 5, color: '#7a1c29'},
        {x: 530, y: 132, radius: 4, color: '#7a1c29'},
        {x: 572, y: 243, radius: 5, color: '#7a1c29'}, //centre
        {x: 628, y: 53,  radius: 4, color: '#7a1c29'},
        {x: 729, y: 71,  radius: 4, color: '#7a1c29'},
        {x: 742, y: 53,  radius: 4, color: '#7a1c29'},
        {x: 729, y: 71,  radius: 5, color: '#7a1c29'},
        {x: 814, y: 128, radius: 7, color: '#7a1c29'},
        {x: 812, y: 265, radius: 5, color: '#7a1c29'},
        {x: 836, y: 249, radius: 4, color: '#7a1c29'},
        {x: 812, y: 265, radius: 6, color: '#7a1c29'},
        {x: 779, y: 337, radius: 5, color: '#7a1c29'},
        {x: 572, y: 243, radius: 6, color: '#7a1c29'},
        {x: 812, y: 265, radius: 7, color: '#7a1c29'},
        {x: 729, y: 71,  radius: 6, color: '#7a1c29'},
        {x: 572, y: 243, radius: 8, color: '#7a1c29'},
        {x: 689, y: 382, radius: 3, color: '#7a1c29'},
        {x: 779, y: 337, radius: 5, color: '#7a1c29'},
        {x: 678, y: 415, radius: 3, color: '#7a1c29'},
        {x: 529, y: 567, radius: 6, color: '#7a1c29'},
        {x: 614, y: 459, radius: 3, color: '#7a1c29'},
        {x: 678, y: 415, radius: 4, color: '#7a1c29'},
        {x: 689, y: 382, radius: 4, color: '#7a1c29'},
        {x: 614, y: 459, radius: 4, color: '#7a1c29'},
        {x: 483, y: 510, radius: 4, color: '#7a1c29'},
        {x: 529, y: 567, radius: 7, color: '#7a1c29'},
        {x: 415, y: 447, radius: 4, color: '#7a1c29'},
        {x: 483, y: 510, radius: 5, color: '#7a1c29'},
        {x: 614, y: 459, radius: 5, color: '#7a1c29'},
        {x: 572, y: 243, radius: 9, color: '#7a1c29'},
        {x: 614, y: 459, radius: 6, color: '#7a1c29'},
        {x: 415, y: 447, radius: 5, color: '#7a1c29'},
        {x: 302, y: 360, radius: 4, color: '#7a1c29'},
        {x: 268, y: 214, radius: 3, color: '#7a1c29'},
        {x: 224, y: 270, radius: 6, color: '#7a1c29'},
        {x: 222, y: 148, radius: 6, color: '#7a1c29'},
        {x: 268, y: 214, radius: 4, color: '#7a1c29'},
        {x: 363, y: 200, radius: 4, color: '#7a1c29'},
        {x: 222, y: 148, radius: 7, color: '#7a1c29'},
        {x: 299, y: 62,  radius: 8, color: '#7a1c29'},
        {x: 363, y: 200, radius: 5, color: '#7a1c29'},
        {x: 373, y: 87,  radius: 6, color: '#7a1c29'},
        {x: 530, y: 132, radius: 5, color: '#7a1c29'},
        {x: 572, y: 243, radius: 10, color: '#7a1c29'},
        {x: 363, y: 200, radius: 6, color: '#7a1c29'},
        {x: 415, y: 447, radius: 6, color: '#7a1c29'},
        {x: 572, y: 243, radius: 12, color: '#7a1c29'},
    ];

    var i = 0;
    var interval = setInterval(function(){
        if (i >= points.length - 1) {
            clearInterval(interval);
        } else {
            drawPath(points[i], points[i + 1]);
        }
        i++;
    }, 500);

    function drawPath(from, to) {
        //var g = heart.gradient('1(0, 1, 2, 1)' + from.color + '-' + to.color);

        var path = heart
                        .path('M' + from.x + ',' + from.y)
                        .attr({
                            stroke: "#f32a2a",
                            strokeOpacity: .9,
                            strokeWidth: 2
                        })
                        .animate({
                            d: 'M' + from.x + ',' + from.y + 'L' + to.x + ',' + to.y
                        }, 500, mina.easeinout, function(){
                            drawEdge(to);
                        });                        
    } 

    function drawEdge(edge) {
       heart.circle(edge.x, edge.y, edge.radius)
               .attr({
                   fill: edge.color
               }); 
    }
    // 
    // var path = heart.path('M200,200L400,400');
    // path.attr({
    //     stroke: "#000",
    // });

})();

