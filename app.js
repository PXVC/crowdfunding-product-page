let bookmarkBtn = document.getElementById("bookmark-btn");
let bookmarkIcon = bookmarkBtn.querySelector("img");

bookmarkBtn.addEventListener("click", (e) => {
	e.preventDefault();
	bookmarkBtn.classList.toggle("bookmarked");
	bookmarkBtn.innerHTML = bookmarkBtn.classList.contains("bookmarked")
		? "<img src='./images/icon-bookmarked.png' alt='bookmark icon' />Bookmarked"
		: "<img src='./images/icon-bookmark.svg' alt='bookmark icon' />Bookmark";
});
