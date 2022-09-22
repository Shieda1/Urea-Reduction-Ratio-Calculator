// https://www.omnicalculator.com/health/urr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ureareductionratioRadio = document.getElementById('ureareductionratioRadio');
const predialysisurealevelRadio = document.getElementById('predialysisurealevelRadio');
const postdialysisurealevelRadio = document.getElementById('postdialysisurealevelRadio');

let ureareductionratio;
let predialysisurealevel = v1;
let postdialysisurealevel = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ureareductionratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Pre-dialysis urea level';
  variable2.textContent = 'Post dialysis urea level';
  predialysisurealevel = v1;
  postdialysisurealevel = v2;
  result.textContent = '';
});

predialysisurealevelRadio.addEventListener('click', function() {
  variable1.textContent = 'Urea reduction ratio';
  variable2.textContent = 'Post dialysis urea level';
  ureareductionratio = v1;
  postdialysisurealevel = v2;
  result.textContent = '';
});

postdialysisurealevelRadio.addEventListener('click', function() {
  variable1.textContent = 'Urea reduction ratio';
  variable2.textContent = 'Pre-dialysis urea level';
  ureareductionratio = v1;
  predialysisurealevel = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ureareductionratioRadio.checked)
    result.textContent = `Urea reduction ratio = ${computeureareductionratio().toFixed(2)}`;

  else if(predialysisurealevelRadio.checked)
    result.textContent = `Pre-dialysis urea level = ${computepredialysisurealevel().toFixed(2)}`;

  else if(postdialysisurealevelRadio.checked)
    result.textContent = `Post dialysis urea level = ${computepostdialysisurealevel().toFixed(2)}`;
})

// calculation

// ureareductionratio = (1 - (postdialysisurealevel / predialysisurealevel)) * 100

function computeureareductionratio() {
  return (1 - (Number(postdialysisurealevel.value) / Number(predialysisurealevel.value))) * 100;
}

function computepredialysisurealevel() {
  return Number(postdialysisurealevel.value) / (1 - (Number(ureareductionratio.value) / 100));
}

function computepostdialysisurealevel() {
  return Number(predialysisurealevel.value) * (1 - (Number(ureareductionratio.value) / 100));
}