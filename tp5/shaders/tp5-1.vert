attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

varying vec4 coords;


void main() {
    
    vec3 offset = vec3(sin(timeFactor) * aVertexPosition.x/10.0, 0, 0);
    vec3 vertexAfterOffset = offset + aVertexPosition;

    vec4 value = uPMatrix * uMVMatrix * vec4(vertexAfterOffset, 1.0);

	gl_Position = value;

    coords = gl_Position;
}
