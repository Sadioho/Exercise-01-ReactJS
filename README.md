# Exercise-01-ReactJS

## 1. Break The UI Into A Component Hierarchy

<image src="./image/exx1.png"></image>

### Các thành phần
1. Full container (Màu đỏ đô): chứa toàn bộ các thành phần trang web.
2. Phần header chứa logo, input địa chỉ giao hàng, button đăng nhập, button giao hàng (màu đỏ)
3. Phần body chứa nội dung của trang web (màu xanh lá).
    1. Category Left (màu xanh trời) : Hiển thị danh mục sản phẩm
        1. Category Left Row : Hiển thị tiêu đề cho mỗi category ( màu lam)
    2. Filter Product Table : Chứa nội dung tìm kiếm, hiển thị của sản phẩm
        1. Search Bar (màu tím): nơi người dùng nhập từ khóa tìm kiếm.
        2. Product Table (màu xanh trời đậm): Hiển thị kết quả dựa trên từ khóa tìm kiếm.
            1. Product Category Row (Màu xanh lá đậm): Hiển thị tiêu đề cho từng loại sản phẩm.
            2. Product Row (màu đen): Hiển thị một hàng cho mỗi sản phẩm.
    3. Form Coupon (màu hồng tím)
4. Footer (màu vàng): Hiển thị thông tin giới thiệu, hỗ trợ.

### Mô hình cấp bậc
- Full container
    - Header
    - Body
        - Category Left
            - Category Left Row
        - Filter Product Table
            - Search Bar
            - Product Table
                - Product Caretory Row
                - Product Row
        - Form Coupon
    - Footer
    
## 2. Xây dựng một bản tĩnh
- Hiển thị danh sách Category Left bằng cách fetch API lấy dữ liệu về
- Hiển thị danh sách ProductTable theo nhóm Category bằng cách fetch API lấy dữ liệu về 
    - Tạo 1 props cho component ProductTable để xét dữ liệu hiển thị ra theo groupCategory 

## 3: Trạng thái của người dùng
- Thanh Search sẽ là trạng thái 
- Thanh Category sẽ là trạng thái






# ASYNC, SYNC, PROMISE
<<<<<<< HEAD

![sync](./sun.png)
=======
![sync](./sun.png);
>>>>>>> bf67a215f9c67d73b9b72adadd47bcd7a6a6de2d
