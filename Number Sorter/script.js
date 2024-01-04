function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  
  function sortAscending() {
    const numbers = document.getElementById('numberInput').value.split(' ').map(Number);
    bubbleSort(numbers);
    document.getElementById('result').innerText = numbers.join(', ');
  }
  
  function sortDescending() {
    const numbers = document.getElementById('numberInput').value.split(' ').map(Number);
    bubbleSort(numbers);
    numbers.reverse();
    document.getElementById('result').innerText = numbers.join(', ');
  }
  