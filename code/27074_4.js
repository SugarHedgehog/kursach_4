(function () {
    retryWhileError(function () {
        NAinfo.requireApiVersion(0, 2);

        let par = new Parallelepiped({
            depth: sl(10, 50),
            height: sl(10, 50),
            width: sl(10, 50),
        });

        let camera = {
            x: 0,
            y: 0,
            z: 0,
            scale: 5,

            rotationX: -Math.PI / 2 + Math.PI / 14,
            rotationY: 0,
            rotationZ: 2 * Math.PI / 3,
        };

        let point2DPar = par.verticesOfFigure.map((coord3D) => project3DTo2D(coord3D, camera));

        autoScale(par.verticesOfFigure, camera, point2DPar, {
            startX: -180,
            finishX: 160,
            startY: -160,
            finishY: 160,
            maxScale: 50,
        });

        point2DPar = par.verticesOfFigure.map((coord3D) => project3DTo2D(coord3D, camera));

        let paint1 = function (ctx) {
            let h = 400;
            let w = 400;
            ctx.translate(h / 2, w / 2);
            ctx.lineWidth = 2;
            ctx.strokeStyle = om.secondaryBrandColors;
            let strok = [5, 4];
            ctx.drawFigure(point2DPar, [
                [strok],
                [0, 1],
                [strok, 0, 1],
                [0, 0, 0, 1],
                [strok, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 1],
            ]);
        };

        NAtask.setTask({
            text: 'Объем параллелепипеда ABCDA_1B_1C_1D_1 равен 9. Найдите объем треугольной пирамиды ABCA_1.',
            answers: 0,
            author: ['Суматохина Александра']
        });
        NAtask.modifiers.addCanvasIllustration({
            width: 400,
            height: 400,
            paint: paint1,
        });
    }, 100000);
})();
