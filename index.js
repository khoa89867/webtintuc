var searchElemement = document.getElementById("search");
var inputName = document.getElementById("inputValue");
var parentElement = document.getElementsByClassName("list")[0]

searchElemement.onclick = function() {
    
    // lấy tất cả những nodeElement chứa class new_item
    var divALLElement = document.querySelectorAll(".new_item")
    
    // Chuyển giá trị của inputName thành chuỗi tìm kiếm không phân biệt hoa thường
    var searchValue = inputName.value.toLowerCase();

    //Xoá nội dung của phần tử cha trước khi thêm phần tử con thỏa mãn
    
    parentElement.innerHTML = ''; 

    // Lặp qua tất cả các phần tử .new_item
    divALLElement.forEach(function(item) {
        var textContent = item.textContent.toLowerCase(); // Nội dung của phần tử
        if (textContent.includes(searchValue)) {
            parentElement.appendChild(item); // Thêm phần tử vào phần tử cha
            parentElement.style.justifyContent = "flex-start"; // Thay đổi màu nền của phần tử thỏa mãn
        } else {
            item.style.backgroundColor = ""; // Đặt lại màu nền nếu không thỏa mãn
        }
    });

    // inputName.value = ''
}
