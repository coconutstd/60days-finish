## 캔버스 그림판 만들기

- 캔버스를 통해 그림판을 만들어보세요.
- 각 세션에서 배운 내용을 바탕으로 Canvas 위에 그림을 그리고 지우고 사이즈도 변경해 보세요.

1. 캔버스 위에 그림을 그리기 위해서 펜의 굵기를 변경해보세요.
   - 파라미터로 전달받는 size에 따라서 setPen 메서드를 완성하세요.
2. 마우스를 눌렀을 때의 위치를 지정해보세요.
   - mouseDownHandler를 완성하세요.
   - canvas의 context의 moveTo 메서드를 활용하세요.
   - 펜의 끝을 둥글게 완성해보세요.
3. 마우스를 움직이고 있는 동안의 위치를 지정해보세요.
   - mouseMoveHandler를 완성하세요.
   - canvas의 context의 lineTo 메서드를 활용하세요.
4. 마우스를 띄었을 때 어떻게 해야될까요?
   - 마우스를 띄면 어떤 상태값이 바뀌어야 할까요?
5. 캔버스 위에 그리고 있는 펜을 지우개로 변경해보세요.
   - 캔버스 색상이 흰색이네요.
   - 지우개의 사이즈도 변경해보세요.
6. 초기화 버튼을 눌렀을 때 그려진 그림이 모두 사라지도록 해보세요.
   - 모든 상태를 처음의 상태로 초기화 해보세요.
