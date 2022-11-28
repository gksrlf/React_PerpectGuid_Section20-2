import { useState } from "react"

const DUMMY_DATA = [
	{
		no: 1,
		title: "test",
		content: "zzz",
	},
	{
		no: 2,
		title: "test2",
		content: "zzz2",
	},
	{
		no: 3,
		title: "test3",
		content: "zzz3",
	},
	{
		no: 4,
		title: "test4",
		content: "zzz4",
	},
]

const CheckBox = () => {
	const [isFix, setIsFix] = useState(false)
	const [checkItems, setCheckItems] = useState([])

	const onFixHandler = (e) => {
		e.preventDefault()
		setIsFix((prev) => !prev)
	}

	const allConfirmHandler = (e) => {
		let checked = e.target.checked
		if (checked) {
			const idArray = []
			DUMMY_DATA.forEach((e) => idArray.push(e.no))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	const singgleConfirmHandler = (e) => {
		let checked = e.target.checked
		if (checked) {
			setCheckItems((prev) => [...prev, parseInt(e.target.dataset.no)])
		} else {
			setCheckItems(
				checkItems.filter((el) => el !== parseInt(e.target.dataset.no))
			)
		}
	}

	return (
		<div>
			{!isFix && (
				<button type="button" onClick={onFixHandler}>
					편집
				</button>
			)}
			{isFix && (
				<div>
					<input
						type="checkbox"
						name="all"
						onChange={allConfirmHandler}
						checked={
							checkItems.length === DUMMY_DATA.length
								? true
								: false
						}
					/>
					<button>삭제</button>
				</div>
			)}
			{DUMMY_DATA.map((data) => (
				<div key={data.no}>
					<input
						type="checkbox"
						data-no={data.no}
						onChange={singgleConfirmHandler}
						checked={checkItems.includes(data.no) ? true : false}
					/>
					<span>{data.no}</span>
					<br />
					<span>{data.title}</span>
					<br />
					<span>{data.content}</span>
				</div>
			))}
		</div>
	)
}

export default CheckBox
