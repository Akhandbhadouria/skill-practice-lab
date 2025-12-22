import cv2

path = input("Enter path of image: ")
image = cv2.imread(path)

if image is None:
    print("Invalid image")
else:
    print("Make your choice: line, rectangle, circle, text")
    cho = input().lower()

    f_image = image.copy()

    if cho == "line":
        x1 = int(input("Enter x1: "))
        y1 = int(input("Enter y1: "))
        x2 = int(input("Enter x2: "))
        y2 = int(input("Enter y2: "))

        f_image = cv2.line(f_image, (x1, y1), (x2, y2), (255,0,0), 2)

    elif cho == "rectangle":
        x1 = int(input("Enter x1: "))
        y1 = int(input("Enter y1: "))
        x2 = int(input("Enter x2: "))
        y2 = int(input("Enter y2: "))

        f_image = cv2.rectangle(f_image, (x1, y1), (x2, y2), (0,255,0), 2)

    elif cho == "circle":
        cx = int(input("Enter center x: "))
        cy = int(input("Enter center y: "))
        r  = int(input("Enter radius: "))

        f_image = cv2.circle(f_image, (cx, cy), r, (0,0,255), 2)

    elif cho == "text":
        text = input("Enter text: ")
        x = int(input("Enter x: "))
        y = int(input("Enter y: "))

        f_image = cv2.putText(f_image, text, (x,y),
                              cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,255), 2)

    else:
        print("Invalid choice!")

    cv2.imshow("Image", f_image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
