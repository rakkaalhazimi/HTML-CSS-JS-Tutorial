declare var ClonedMediaStream: {
  prototype: MediaStream;
  new(): MediaStream;
  new(stream: MediaStream): MediaStream;
  new(tracks: MediaStreamTrack[]): MediaStream;
}

class ClonedMediaStreamClass extends MediaStream {
  public constructor();
  public constructor(stream: MediaStream);
  public constructor(tracks: MediaStreamTrack[]);
  public constructor(...args: any[]) {
    super();
    if (args.length == 0) return new MediaStream();
    else {
      console.log(args);
      return new MediaStream();
    }
  }
  
}

ClonedMediaStream = ClonedMediaStreamClass;
let clonedMs = new ClonedMediaStream();
console.log(clonedMs);

declare var foo: {
  count: number;
}

foo = { count: 10 };

console.log(foo);


