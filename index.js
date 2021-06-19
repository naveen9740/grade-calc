let eefm1, eefm2, pdt1, pdt2, pe1_1, pe1_2, pe2_1, pe2_2, vp1, vp2, lab1, lab2, cgpa, g1;
let a = document.getElementById('a').addEventListener('input', function (e) {
    eefm1 = e.target.value;
});
let b = document.getElementById('b').addEventListener('input', function (e) {
    eefm2 = e.target.value;
});
let c = document.getElementById('c').addEventListener('input', function (e) {
    pdt1 = e.target.value;
});
let d = document.getElementById('d').addEventListener('input', function (e) {
    pdt2 = e.target.value;
});
let e = document.getElementById('e').addEventListener('input', function (e) {
    pe1_1 = e.target.value;
});
let f = document.getElementById('f').addEventListener('input', function (e) {
    pe1_2 = e.target.value;
});
let g = document.getElementById('g').addEventListener('input', function (e) {
    pe2_1 = e.target.value;
});
let h = document.getElementById('h').addEventListener('input', function (e) {
    pe2_2 = e.target.value;
});
let i = document.getElementById('i').addEventListener('input', function (e) {
    vp1 = e.target.value;
});
let j = document.getElementById('j').addEventListener('input', function (e) {
    vp2 = e.target.value;
});
let k = document.getElementById('k').addEventListener('input', function (e) {
    lab1 = e.target.value;
});
let l = document.getElementById('l').addEventListener('input', function (e) {
    lab2 = e.target.value;
});
let m = document.getElementById('cgpa').addEventListener('input', function (e) {
    cgpa = e.target.value;
});


let btn = document.getElementById('btn_Result').addEventListener('click', function () {
    let IA1 = (Math.ceil(eefm1) + Math.ceil(eefm2));
    let ES1 = Math.ceil(IA1 / 2) + Math.ceil(2.5 * cgpa);
    let IA2 = (Math.ceil(pdt1) + Math.ceil(pdt2));
    let ES2 = Math.ceil(IA2 / 2) + Math.ceil(2.5 * cgpa);
    let IA3 = (Math.ceil(pe1_1) + Math.ceil(pe1_2));
    let ES3 = Math.ceil(IA3 / 2) + Math.ceil(2.5 * cgpa);
    let IA4 = (Math.ceil(pe2_1) + Math.ceil(pe2_2));
    let ES4 = Math.ceil(IA4 / 2) + Math.ceil(2.5 * cgpa);
    let IA5 = (Math.ceil(vp1) + Math.ceil(vp2));
    let ES5 = Math.ceil(IA5 / 2) + Math.ceil(2.5 * cgpa);

    let eefm_total = IA1 + ES1;
    let pdt_total = IA2 + ES2;
    let pe1_total = IA3 + ES3;
    let pe2_total = IA4 + ES4;
    let vp_total = IA5 + ES5;

    function grade(a) {
        if (a >= 90) {
            return 'A+'
        }
        else if (a >= 80 && a <= 89) {
            return 'A'
        }
        else if (a >= 70 && a <= 79) {
            return 'B'
        }
        else if (a >= 60 && a <= 69) {
            return 'C'
        }
        else if (a >= 50 && a <= 59) {
            return 'D'
        }
        else if (a >= 40 && a <= 49) {
            return 'E'
        }
        else {
            return 'F'
        }
    }

    let mark_sheet = document.getElementById('result_incoming').innerHTML = `
    <div class="result">
            
            <table>
                <thead>
                    <tr>
                        <th>
                            <ul>Subject</ul>
                        </th>
                        <th>
                            <ul>Grade</ul>
                        </th>
                        <th>
                            <ul>Total</ul>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>EEFM</th>
                        <td>${grade(eefm_total)}</td>
                        <td>${eefm_total}</td>
                    </tr>
                    <tr>
                        <th>PDT</th>
                        <td>${grade(pdt_total)}</td>
                        <td>${pdt_total}</td>
                    </tr>
                    <tr>
                        <th>PE-1</th>
                        <td>${grade(pe1_total)}</td>
                        <td>${pe1_total}</td>
                    </tr>
                    <tr>
                        <th>PE-2</th>
                        <td>${grade(pe2_total)}</td>
                        <td>${pe2_total}</td>
                    </tr>
                    <tr>
                        <th>VP</th>
                        <td>${grade(vp_total)}</td>
                        <td>${vp_total}</td>
                    </tr>
                    <tr>
                        <th>BP LAB</th>
                        <td>${grade(lab1)}</td>
                        <td>${lab1}</td>
                    </tr>
                    <tr>
                        <th>VP LAB</th>
                        <td>${grade(lab2)}</td>
                        <td>${lab2}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});
