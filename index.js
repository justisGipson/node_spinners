const process = require('process')
const fs = require('fs')
const rdl = require('readline')
const std = process.stdout
const l = console.log()
const spinners = JSON.parse(fs.readFileSync('./spinners.json').toString())


class Spinner {
	
	spin(spinnerName) {
		process.stdout.write("\x1b[?25l")
		const spin = spinners[spinnerName]
		const spinnerFrames = spin.frames
		const spinnerTimeInterval = spin.interval

		let index = 0

		this.timer = setInterval(() => {
			let now = spinnerFrames[index]
			if (now == undefined) {
				index = 0
				now = spinnerFrames[index]
			}
			std.write(now)
			rdl.cursorTo(std, 0, 0)
			index = index >= spinnerFrames.length ? 0 : index + 1
		}, spinnerTimeInterval)
	}
}

new Spinner().spin("arc")
