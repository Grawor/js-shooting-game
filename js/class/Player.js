// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : プレイヤークラス
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
class Player extends createjs.Shape{

    x;      // プレイヤーのX位置
    y;      // プレイヤーのY位置
    stage;  // 描写させるステージ

    // getter
    getX() { return this.x; }   // X位置を返す。
    getY() { return this.y; }   // Y位置を返す。

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : コンストラクタ
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    constructor(stage) {

        super();    // 親クラスのコンストラクタ呼び出し

        this.x = 0;
        this.y = 0;
        this.stage = stage;

        // プレイヤーの形を定義
        this.graphics.beginFill("white").moveTo(0, -10).lineTo(-5, 0).lineTo(5, 0).closePath();
        // ステージに追加
        stage.addChild(this);
    }
    
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : プレイヤーを移動する。
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    move() {

        // 自機をマウス座標まで移動させる(減速で移動)
        this.x += (this.stage.mouseX - this.x) * 0.1;
        this.y += (this.stage.mouseY - this.y) * 0.1;
    }
}