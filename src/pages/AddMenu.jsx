export default function AddMenu({handleClick, handleChangeTitle, title,url,comment}) {

	return (
		<div>
			<label>
				メニュー名:
				<input type="text" name="title" value={title} onChange={handleChangeTitle}></input>
			</label>
			<label>
				ジャンル:
				<select name="category">
					<option value="rice">ごはん</option>
					<option value="noodle">麺</option>
					<option value="meat">肉料理</option>
					<option value="fish">魚料理</option>
					<option value="vegetable">野菜料理</option>
					<option value="soup">スープ</option>
					<option value="sauce">ソース・ドレッシング</option>
					<option value="sweets">スイーツ</option>
					<option value="other">その他</option>
				</select>
			</label>
			<label>
				URL:
				<input type="url" name="url" value={url} ></input>
			</label>
			<label>
				コメント:
				<textarea type="comment" name="comment" value={comment}></textarea>
			</label>
			<button type="button" onClick={handleClick}>追加</button>
		</div>
	)
}
