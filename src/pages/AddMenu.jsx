export default function AddMenu({
  handleClick,
  handleChangeTitle,
  title,
	handleChangeCategory,
	handleChangeUrl,
  url,
	handleChangeComment,
	handleCheckFab,
	fab,
}) {
  return (
    <form>
      <div>
        <label>
          メニュー名:
          <input type="text" name="title" value={title} onChange={handleChangeTitle} />
        </label>
      </div>
      <div>
        <label>
          ジャンル:
          <select name="category" onChange={handleChangeCategory}>
            <option value="ごはん">ごはん</option>
            <option value="麺">麺</option>
            <option value="肉料理">肉料理</option>
            <option value="魚料理">魚料理</option>
            <option value="野菜料理">野菜料理</option>
            <option value="スープ">スープ</option>
            <option value="ソース・ドレッシング">ソース・ドレッシング</option>
            <option value="スイーツ">スイーツ</option>
            <option value="その他">その他</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          URL:
          <input type="url" name="url" value={url} onChange={handleChangeUrl} />
        </label>
      </div>
      <div>
        <label>
          コメント:
          <textarea type="text" name="comment" placeholder="コメントを記載" onChange={handleChangeComment} />
        </label>
      </div>
			<div>
				<input type="checkbox" onChange={handleCheckFab} checked={fab} />
				お気に入り
			</div>
      <button type="button" onClick={handleClick}>
        追加
      </button>
    </form>
  );
}
