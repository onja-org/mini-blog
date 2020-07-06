// grab the elements we need
const postList = document.querySelector('#post-list');
const submitBtn = document.querySelector('#submit-form');
const postTitleInput = document.querySelector('#new-post-title');
const postContentTextarea = document.querySelector('#new-post-content');
const firstCheckBox = document.querySelector('#hobbies-tag');
const secondCheckBox = document.querySelector('#school-life-tag');
const thirdCheckBox = document.querySelector('#personal-tag');
const addPostForm = document.querySelector('form');

// add the event listener on the submit, click
submitBtn.addEventListener('click', ($event) => {
	$event.preventDefault();

	// ************** CREATE HTML ELEMENT ****************

	const myHTMLPost = `
    <div class="card some-space">
        <div class="card-body">
            <h5 class="card-title">${postTitleInput.value}</h5>
            <p class="card-text">${postContentTextarea.value}</p>
            <span class="badge badge-light ${!firstCheckBox.checked ? 'hidden' : ''}">Hobbies</span>
            <span class="badge badge-light ${
				!secondCheckBox.checked ? 'hidden' : ''
			}">School life</span>
            <span class="badge badge-light ${
				!thirdCheckBox.checked ? 'hidden' : ''
			}">Personal</span>
        </div>
    </div>
    `;

	// another way to create the HTML element inside javascript
	//const myFragment = document.createRange().createContextualFragment(myHTMLPost);
	//postList.appendChild(myFragment)

	postList.innerHTML += myHTMLPost;

	addPostForm.reset();
});
