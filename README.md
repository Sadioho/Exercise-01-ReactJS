# Exercise-01-ReactJS

## 1. Break The UI Into A Component Hierarchy

<image src="./image/Break.png"></image>

### Các thành phần

1. Container (màu đỏ): Là phần chứa toàn bộ trang web
2. Header (màu cam) : Chứa logo, Input địa chỉ giao hàng, button đăng nhập, button giao hàng
3. Body ( màu xanh trời đậm): Là phần content của trang web
    1. Left Container (màu tím): Chứa danh sách catergory
        1. Catergory List (màu đỏ): Chứa các danh mục catergory
    2. Product Container ( màu xanh lá đậm):
        1. ProductList (màu tím): Chứa các Product Item
    3. Cart Container(màu đà): Chứa thông tin order,coupon
4. Footer (màu vàng) : Là phần chân của trang web hiển thị thông tin giới thiệu, hỗ trợ
## Thành phần chung tái sử dụng

1. Button (màu xanh lá cây): Là thành phần nút bấm
2. SearchInput(màu xanh ngọc): Là thành phần nhập dữ liệu người dùng
3. Currency (màu đen): Là thành phần hiển thị giá tiền
4. Image Product (màu vàng đậm): Chứa ảnh 
5. ButtonAdd(màu lam ) : Dùng để thêm sản phẩm vào giỏ hàng 
6. Product Item (màu xanh trời tím nhạt ): Chứa thông tin sản phẩm 

### Mô hình cấp bậc
- Container
    - Header
        - Button
        - Search Input
        - Button
    - Body
        - Left Container
            - Product List 
                - Product Item
        - Product Container
            - Search Input 
            - Product List
                - Product Item
                    - Image
                    - Currency
                    - Button Add
        - Cart Container
            - Button
            - Currency
            - Search Input
            - Currency
    - Footer


    
## 2. Xây dựng một bản tĩnh
- Hiển thị danh sách Category bằng cách fetch API lấy dữ liệu về
- Hiển thị danh sách sản phẩm theo nhóm Category :
  - Gộp 2 API lại để hiển thị ra được sản phẩm theo nhóm

## 3: Trạng thái của người dùng
- Thanh Search sẽ là trạng thái 
- Thanh Category sẽ là trạng thái






# ASYNC, SYNC, PROMISE
<<<<<<< HEAD
<<<<<<< HEAD

![sync](./sun.png)
=======
![sync](./sun.png);
>>>>>>> bf67a215f9c67d73b9b72adadd47bcd7a6a6de2d
=======
![sync](./sun.png);
>>>>>>> bf67a215f9c67d73b9b72adadd47bcd7a6a6de2d
