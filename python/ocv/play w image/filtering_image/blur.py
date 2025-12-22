import cv2
image=cv2.imread("play w image/test.png")
blur=cv2.GaussianBlur(image,(7,71),3)

cv2.imshow("original",image)
cv2.imshow("blured",blur)
cv2.waitKey(0)
cv2.destroyAllWindows()
