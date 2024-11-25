/// RETURNS A RANDOM DNA BASE
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // RETURNS A RANDOM SINGLE STRAND OF DNA CONTAINING 15 BASES
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // CREATES A NEW pAequor WITH MANY DIFFERENT FUNCTIONS
  const pAequorFactory = (number, dnaArray) => {
    return {specimenNum: number,
            dna: dnaArray,
            //Mutates the dna sequence of the new pAequor
            mutate() {
              let dnaArrayMutation = Math.floor(Math.random() * (dnaArray.length));
              //console.log(dnaArray);
              //console.log(dnaArrayMutation);
              //console.log(dnaArray[dnaArrayMutation]);
              if (dnaArray[dnaArrayMutation] === 'A') {
                const dnaBases = ['T', 'C', 'G']
                dnaArray[dnaArrayMutation] = dnaBases[Math.floor(Math.random() * 3)] 
                //console.log(dnaArray[dnaArrayMutation]);
                //console.log(dnaArray);
                return dnaArray;
              } else if (dnaArray[dnaArrayMutation] === 'T') {
                const dnaBases = ['A', 'C', 'G']
                dnaArray[dnaArrayMutation] = dnaBases[Math.floor(Math.random() * 3)] 
                //console.log(dnaArray[dnaArrayMutation]);
                //console.log(dnaArray);
                return dnaArray;    
              } else if (dnaArray[dnaArrayMutation] === 'C') {
                const dnaBases = ['A', 'T', 'G']
                dnaArray[dnaArrayMutation] = dnaBases[Math.floor(Math.random() * 3)] 
                //console.log(dnaArray[dnaArrayMutation]);
                //console.log(dnaArray);
                return dnaArray;    
              } else if (dnaArray[dnaArrayMutation] === 'G') {
                const dnaBases = ['A', 'T', 'C']
                dnaArray[dnaArrayMutation] = dnaBases[Math.floor(Math.random() * 3)] 
                //console.log(dnaArray[dnaArrayMutation]);
                //console.log(dnaArray);
                return dnaArray;    
              }
            },
            compareDNA(pAequor) {
              let count = 0;
              for (let i = 0; i < dnaArray.length; i++) {
                if (dnaArray[i] === pAequor[i]) {
                  count++;
                }
            }
            //console.log(count);
            return `Specimen #1 and specimen #2 have ${((count / dnaArray.length) * 100).toFixed(2)}% DNA in common.`;
          },
          willLikelySurvive() {
            let count = 0;
            for (let i = 0; i < dnaArray.length; i++) {
              if (dnaArray[i] === 'C' || dnaArray[i] === 'G') {
                count++;
              }
            }
            if (((count / dnaArray.length) * 100) >= 60) {
              return true;
            } else {
              return false;
            }
          },
          complementStrand() {
            let complementStrand = [];
            for (let i = 0; i < dnaArray.length; i++) {
              if (dnaArray[i] === 'A') {
                complementStrand.push('C');
              } else if (dnaArray[i] === 'C') {
                complementStrand.push('A');
              } else if (dnaArray[i] === 'T') {
                complementStrand.push('G');
              } else if (dnaArray[i] === 'G') {
                complementStrand.push('T');
              } 
            }
            console.log(dnaArray);
            return complementStrand;
          }
        }
  }
  
  
  let dnaArray = mockUpStrand();
  let comparingDNA = ['G', 'G', 'A', 'T', 'C', 'G', 'G', 'A', 'T', 'C', 'G', 'G', 'A', 'T', 'C']
  /*console.log(pAequorFactory(39, dnaArray).mutate());
  console.log(pAequorFactory(49, dnaArray));
  console.log('Specimen #1: ');
  console.log(dnaArray);
  console.log('Specimen #2: ');
  console.log(comparingDNA);
  console.log(pAequorFactory(39, dnaArray).compareDNA(comparingDNA));
  console.log(pAequorFactory(39, dnaArray).complementStrand());*/
  
  //console.log(pAequorFactory(39, dnaArray).willLikelySurvive());
  
  
  // THE FOLLOWING CODE STORES SPECIMEN THAT ARE LIKELY TO SURVIVE IN AN ARRAY
  
  function puttingPaequorSpecimenIntoArray() {
    let arrayOfPaequorSpecimen = [];
    let i = 1;
    let numberOfFailedSpecimen = 0;
    do {
      /*console.log(numberOfFailedSpecimen);
      console.log(i);*/
      let pAequorSpecimen = pAequorFactory(i - numberOfFailedSpecimen, mockUpStrand());
      //console.log(pAequorSpecimen);
      if (pAequorSpecimen.willLikelySurvive()) {
        arrayOfPaequorSpecimen.push(pAequorSpecimen);
      } else {
        numberOfFailedSpecimen++;
      }
      i++;
    } while (arrayOfPaequorSpecimen.length < 30)
    return arrayOfPaequorSpecimen;
  }
  
  //console.log(puttingPaequorSpecimenIntoArray());
  
  // TWO MOST RELATED INSTANCES OF RELATED pAequor
  const mostRelated = () => {
    let pAequorArray = puttingPaequorSpecimenIntoArray();
    //console.log(pAequorArray);
    //console.log(Object.values(pAequorArray[i])[1]);
    let countArray = [];
    console.log(pAequorArray.length);
    for (let i = 0; i < pAequorArray.length; i++) {
      if (i < pAequorArray.length - 1) {
        /*console.log('Control number: ' + (i + 1));
        console.log('Specimen #1: ');
        console.log(Object.values(pAequorArray[i])[1]);
        console.log('Specimen #2: ');
        console.log(Object.values(pAequorArray[i + 1])[1]);*/
        let count = 0;
        for (let j = 0; j < (Object.values(pAequorArray[i])[1]).length - 1; j++) {
          if (Object.values(pAequorArray[i])[1][j] === Object.values(pAequorArray[i + 1])[1][j]) {
            count++;
          }
        }
        countArray.push(count);
      }
    }
    console.log(countArray);
    let largest = countArray[0];
    for (let m = 0; m < countArray.length; m++) {
      if (countArray[m] > largest) {
        largest = countArray[m];
      }
    }
    console.log(largest);
    const bestMatch = countArray.filter(number => number >= largest);
    console.log(bestMatch);
    let bestMatchCount = 0;
    let bestMatchArray = [];
    for (let n = 0; n < countArray.length; n++) {
      if (countArray[n] === largest) {
        console.log(n);
        bestMatchArray.push(n);
        bestMatchCount++;
      }
    }
    console.log(pAequorArray);
    console.log(bestMatchCount);
    for (let l = 0; l < bestMatchCount; l++) {
      /*console.log(Object.values(pAequorArray[bestMatchArray[0]])[1]);
      console.log(Object.values(pAequorArray[bestMatchArray[0] + 1])[1]);*/
      if (bestMatchCount === 1) {
        return `The best sample match control is between samples ${bestMatchArray[0]}: ${Object.values(pAequorArray[bestMatchArray[l]])[1]} and ${bestMatchArray[0] + 1}: ${Object.values(pAequorArray[bestMatchArray[l] + 1])[1]}`;
      } else {
          for (let o = 0; o < bestMatchCount; o++) {
            console.log(`The best match is between samples ${bestMatchArray[l]}: ${Object.values(pAequorArray[bestMatchArray[o]])[1]} and ${bestMatchArray[l] + 1}: ${Object.values(pAequorArray[bestMatchArray[o] + 1])[1]}`);
          }
        }
    }
    //Zavrsiti jos uporedjivanje uzoraka ukoliko veci broj kontrola ima najvece poklapanje
  }
  
  console.log(mostRelated());