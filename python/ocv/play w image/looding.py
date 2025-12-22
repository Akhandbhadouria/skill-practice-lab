# 
import cv2
image=cv2.imread("play w image/test.png",flags=1)

if image is None:
    print("Image not found")
else:
    print("image uploaded successfully")
    cv2.imshow("image",image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
   