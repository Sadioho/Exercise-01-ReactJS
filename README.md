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



# Bài tập 4

<image src="./image/order.png"></image>

### Các thành phần 

1. Container màu vàng chứa toàn bộ nội dung của 1 phiếu order product
2. Header màu cam chứa hình ảnh và tên và size sản phẩm
    1. Image màu đỏ chứa image sản phẩm
    2. Name Product màu tím chứa tên sản phẩm
    3. Size màu xanh trời chưa size
3. Body màu tím đậm dùng để chứa loại size
    1. Loại size màu xanh trời 
4. Footer màu hồng chứa ghi chú, số lượng sản phẩm và nút thêm vào giỏ hàng
    1. Input màu xanh lá thêm ghi chú
    2. Nút xanh trời nhạt cộng trừ số lượng sản phẩm 
    3. Số lượng hình tròn màu tím
    4. Nút màu xanh lá thêm vào giỏ hàng khi order xong
    5. Tổng giá tiền màu tím
5. Nút close màu đen tắt order

### Mô hình cấp bậc

- Container 
    - Header
        - Image
        - Name Product
        - Size Product
    - Body
        - Size Product
    - Footer
        - Input Note
        - Button Trừ
        - Button Cộng
        - Số lượng
        - Button 
            - Text
            - Price Sum
    - Close
# ASYNC, SYNC, PROMISE

![sync](./sun.png)

