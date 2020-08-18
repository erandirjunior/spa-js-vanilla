const template = `
		<a href="/">Back</a>
		<form id="form">
			<label for="fname">First name:</label><br>
			<input type="text" id="fname" name="fname" value="John"><br>
			<label for="lname">Last name:</label><br>
			<input type="text" id="lname" name="lname" value="Doe"><br><br>
			<input type="submit" value="Submit">
		</form>`

export default function teste() {
	return {
		view: template,
		callback: function() {
			const $form = document.querySelector('#form')
			$form.addEventListener('submit', function(evt) {
				evt.preventDefault()
				const firstName = evt.target[0].value
				const lastName = evt.target[1].value

				console.log(`First name is ${firstName} and lastName is ${lastName}`)
			})
		},
		style: () => {
			return `
			body {
				background-color: #dedede
			}
			input {
				background-color: red;
			}
			`
		}
	}
}
