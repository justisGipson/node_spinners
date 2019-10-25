const process = require('process')
const rdl = require('readline')
const std = process.stdout

class Spinner {
	
	spin() {
		process.stdout.write("\x1b[?25l")

		const spinners = ['-', '\\', '|', '/']

		let index = 0

		setInterval(() => {
			let line = spinners[index]

			if (line == undefined) {
				index = 0
				line = spinners[index]
			}

			std.write(line)

			rdl.cursorTo(std, 0, 0)

			index = index > spinners.length ? 0 : index + 1
		}, 100)
	}
}

new Spinner().spin()
