
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform vec3 cameraPosition;
uniform vec3 selfPosition;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;

void main() {
	vec4 offset= vec4(0.0, 0.0, 0.0, 0.0);

	vec3 forward = cameraPosition - selfPosition;
	forward = forward / sqrt(forward.x * forward.x + forward.y * forward.y + forward.z * forward.z); // normalize

	float alpha = -1.0 * atan(forward.z, forward.x) + 3.14/2.0;

	mat4 yRotation = mat4(
		vec4(cos(alpha), 0, sin(alpha), 0),
		vec4(0, 1, 0, 0),
		vec4(-sin(alpha), 0, cos(alpha), 0),
		vec4(0, 0, 0, 1)
	);

	vTextureCoord = aTextureCoord;

    offset = vec4(aVertexPosition, 1.0) * yRotation;

	vec2 positionOnTheHeightmap = vec2(selfPosition.x/400.0 + 0.5, selfPosition.z/400.0 + 0.5);

	float height = 0.25 * texture2D(uSampler2, positionOnTheHeightmap).b;

	gl_Position = uPMatrix * uMVMatrix * (offset + 400.0 * vec4(0.0, height, 0.0, 0.0));
}