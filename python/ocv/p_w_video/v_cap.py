import cv2

cap=cv2.VideoCapture(0)
while True:
    ret, frame=cap.read()
    if not ret:
        print("not read frame")
        break
    
    cv2.imshow("web cam ", frame)
    if cv2.waitKey(1)& 0xFF ==ord('q'):
        print("qutting")
        break

cap.release()
cv2.destroyAllWindows()