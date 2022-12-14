import cohere from "https://esm.sh/cohere-ai@4.3.0";
cohere.init('u5Exv5CWdoNVUiDLaSbd0NihQrXHfOcsue9QC9bg');

export async function enterPrompt() {
  if (document.getElementById("inputText").value.length == 0) {
    alert("Please Enter Text!")
  }
  else
  {
    var x = document.getElementById("introText");
    x.style.display = "none";
    var y = document.getElementById("go");
    y.style.display = "none";
    document.getElementById('firstMessage').appendChild(await createPhrase())
    
    var z = document.getElementById("tmmText");
    z.style.display = "block";
  }
}

async function createPhrase() {
  let phrase = document.createElement('p');
  phrase.classList.add('prompt','phrase')
  phrase.textContent = await prompto();
  return phrase;
}

async function generatePhrases() {
  document.getElementById('firstMessage').appendChild(await createPhrase())
  document.getElementById('firstMessage').appendChild(await createPhrase())
  document.getElementById('firstMessage').appendChild(await createPhrase())
}

async function prompto() {
  const input = 'Prompt: A spectacular view of the night sky made up of countless stars';
  const output = '\nPhrase:';
  const memory =  'Prompt: Nature\nPhrase: Vibrant red colors glow in comparison to the vibrant young plants \n--\nPrompt: Space\nPhrase: Infinite horizons as new stars birth a life-changing fireworks display\n--\nPrompt: Engineering\nPhrase: Intricate designs of complex infrastructures and incoherent jargon\n--\nPrompt: The rhythm of life\nPhrase: Supernatural connections between incomparable consciousnesses inducing emotional ecstasy\n--\nPrompt: Walking to school\nPhrase: Ambitious and meaningful focus fueled by passion and growth in communities\n--\nPrompt: Five little monkeys on the bed\nPhrase: Filled with energy, bouncing around with no distractions in joyous celebration\n--\nPrompt: Brown sweaters in winter months\nPhrase: Cozy and comfortable, beautiful yet somewhat mundane\n--\nPrompt: Cats are smarter than humans\nPhrase: Umbrellas and puddles are their favorite things\n--\nPrompt: One last time\nPhrase: Sorrowful goodbyes from meaningful relationships in which words cannot describe\n--\nPrompt: Boring city traffic\nPhrase: A collection of countlessly unique lives all stopped to reflect in the same moment of time\n--\nPrompt: Red chairs\nPhrase: Spontaneous gatherings in elegant yet unassuming locations\n--\n';


  const response = await cohere.generate({
    model: 'large',
    prompt: memory + input + output,
    max_tokens: 100,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  });
  return `Phrase:${response.body.generations[0].text}`;
};

document.getElementById('go').addEventListener('click',enterPrompt)
document.getElementById('tmmText').addEventListener('click',generatePhrases)