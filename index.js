class transport {
	constructor(txtvalue, words, wait=3000){
		this.txtvalue=txtvalue;
		this.words=words;
		this.txt='';
		this.wordIndex=0;
		this.wait=parseInt(wait, 10);
		this.type();
		this.isdelete=false;
		
	}

	type() {
		const wordofIndex=this.wordIndex % this.words.length;
		const wordShow = this.words[wordofIndex];

		if(this.isdelete){
			this.txt = wordShow.substring(0, this.txt.length - 1);
		}
		else{
			this.txt = wordShow.substring(0, this.txt.length + 1);
		}

		this.txtvalue.innerHTML = `<span class="txt">${this.txt}</span>`;
		let txtspeed =300;
		if(this.isdelete){
			txtspeed /= 2;
		}

		if(!this.isdelete && this.txt === wordShow) {
			this.isdelete = true;
			txtspeed=this.wait;
		}
		else if(this.isdelete && this.txt ===''){
			this.isdelete = false;
			this.wordIndex++;
			txtspeed=500;
		}

		setTimeout(()=> this.type(), txtspeed);
	}
}

function verifier(){
	console.log('hello');
	const totaltext = document.querySelector('.txtvalue');
	const words = JSON.parse(totaltext.getAttribute('data-word'));
	const wait = totaltext.getAttribute('data-wait');

	new transport(totaltext, words, wait)

}

document.addEventListener('DOMContentLoaded',verifier);

 // constructor(txtElement, words, wait = 3000) {
 //    this.txtElement = txtElement;
 //    this.words = words;
 //    this.txt = '';
 //    this.wordIndex = 0;
 //    this.wait = parseInt(wait, 10);
 //    this.type();
 //    this.isDeleting = false;
 //  }

 //  type() {
 //    // Current index of word
 //    const current = this.wordIndex % this.words.length;
 //    // Get full text of current word
 //    const fullTxt = this.words[current];

 //    // Check if deleting
 //    if(this.isDeleting) {
 //      // Remove char
 //      this.txt = fullTxt.substring(0, this.txt.length - 1);
 //    } else {
 //      // Add char
 //      this.txt = fullTxt.substring(0, this.txt.length + 1);
 //    }

 //    // Insert txt into element
 //    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

 //    // Initial Type Speed
 //    let typeSpeed = 300;

 //    if(this.isDeleting) {
 //      typeSpeed /= 2;
 //    }

 //    // If word is complete
 //    if(!this.isDeleting && this.txt === fullTxt) {
 //      // Make pause at end
 //      typeSpeed = this.wait;
 //      // Set delete to true
 //      this.isDeleting = true;
 //    } else if(this.isDeleting && this.txt === '') {
 //      this.isDeleting = false;
 //      // Move to next word
 //      this.wordIndex++;
 //      // Pause before start typing
 //      typeSpeed = 500;
 //    }

 //    setTimeout(() => this.type(), typeSpeed);
 //  }