function getAdvice() {
  fetch('https://api.adviceslip.com/advice', {cache: "no-store"})
    .then(response => response.json())
    .then(data => {
        document.getElementById("advice_text").textContent = data.slip.advice;
        document.getElementById("advice_id").textContent = "ADVICE #"+data.slip.id
    });

}