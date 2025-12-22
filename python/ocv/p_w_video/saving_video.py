import cv2

camera =cv2.VideoCapture(0)
frame_width=int(camera.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height=int(camera.get(cv2.CAP_PROP_FRAME_HEIGHT))

codec=cv2.VideoWriter_fourcc(*'XVID')
recorder=cv2.VideoWriter("my_video.mp4",codec,20,(frame_width,frame_height))

while True:
    ret,image=camera.read()

    if not ret:
        break 
    recorder.write(image)
    cv2.imshow("recoring",image)

    if cv2.waitKey(1) & 0xFF ==ord('q'):
        break

camera.release()
recorder.release()
cv2.destroyAllWindows()