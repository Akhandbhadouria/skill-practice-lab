import cv2

image=cv2.imread("play w image/test.png")

if image is None:
    print("image not loadede")
else:
    (h,w)=image.shape[:2]
    center=(w//2,h//2)
    m=cv2.getRotationMatrix2D(center,90,1.0)
    rotated=cv2.warpAffine(image,m,(w,h))

    cv2.imshow("original",image)
    cv2.imshow("rotaded",rotated)
    cv2.waitKey(0)
    cv2.destroyAllWindows