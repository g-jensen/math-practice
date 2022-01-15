class Timer {
    static timer: number = 0.0;
    static prev: number = 0.0;
    static restart() {
        this.prev = this.timer;
        this.timer = 0.0;
    }
}