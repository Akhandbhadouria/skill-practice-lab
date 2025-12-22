# import cv2
# image=cv2.imread("play w image/test.png",flags=1)

# if image is None:
#     print("Image not found")
# else:
#     h,w,c=image.shape
#     print(f"height: {h}, width: {w}, channels: {c}")
 

#                          converting color imahge to greyscale;

# import cv2
# image=cv2.imread("play w image/test.png",flags=1)

# if image is None:
#     print("Image not found")
# else:
#    grey=cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
#    cv2.imshow("grey_image",grey)
#    cv2.waitKey(0)
#    cv2.destroyAllWindows()



                        #  resizing image;


import cv2
image=cv2.imread("play w image/test.png",flags=1)

if image is None:
    print("Image not found")
else:
    resized=cv2.resize(image,(300,300)) 
    cv2.imshow("originalimage",image)
    cv2.imshow("resized_image",resized)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
