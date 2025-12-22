import cv2
image=cv2.imread("play w image/test.png",flags=1)

if image is None:
    print("Image not found")
else:
    
    succ=cv2.imwrite("outputest.png",image)
    if succ:
        print("Image saved successfully")
    else:
        print("Image not saved")