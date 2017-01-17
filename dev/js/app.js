$(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#menu',
        anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['transparent', '#bd9663', '#9c2856', '#1e272b', '#479c38', '#633978'],
        navigation: true,
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });

    
        var renderer, scene, camera;

        var ww = window.innerWidth,
        wh = window.innerHeight,
        particles = new THREE.Object3D(),
        amountParticles = 50,
        centerVector = new THREE.Vector3(0, 0, 0);

        var createParticles = function() {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(centerVector);

        for (var i = 0; i < amountParticles; i++) {
            for (var j = 0; j < amountParticles; j++) {

            var material = new THREE.PointsMaterial({
                size: 1,
                color: new THREE.Color("hsl(" + ((i / amountParticles) * 360) / 360 + ", 50%, 50%)"),
                sizeAttenuation: false
            });
            var particle = new THREE.Points(geometry, material);
            particle.position.x = i - (amountParticles / 2);
            particle.position.y = (Math.sin(i / 4) * Math.cos(j / 4)) * 3;
            particle.position.z = j - (amountParticles / 2);

            particles.add(particle);
            }
        }

        };

        var init = function() {
        THREE.ImageUtils.crossOrigin = '';
        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        document.body.appendChild(renderer.domElement);
        renderer.setSize(ww, wh);
        renderer.setClearColor(0x00010D);

        scene = new THREE.Scene();
        scene.add(particles);

        camera = new THREE.PerspectiveCamera(45, ww / wh, 1, 1000);
        camera.position.set(0, 20, 50);
        camera.lookAt(centerVector);
        scene.add(camera);

        createParticles();

        controls = new THREE.OrbitControls(camera);

        requestAnimationFrame(render);

        window.addEventListener('resize', onResize, false);
        };
        var onResize = function() {
        ww = window.innerWidth;
        wh = window.innerHeight;
        renderer.setSize(ww, wh);
        camera.aspect = ww / wh;
        camera.updateProjectionMatrix();
        };

        var render = function(a) {

        requestAnimationFrame(render);

        for (var i = 0; i < amountParticles * amountParticles; i++) {
            var particle = particles.children[i];
            particle.position.y = (Math.sin((particle.position.x + a / 200) / 4) * Math.cos((particle.position.z + a / 200) / 4)) * 3 * (Math.sin(a / 1000));
        }

        renderer.render(scene, camera);
        };

        init();
   
});