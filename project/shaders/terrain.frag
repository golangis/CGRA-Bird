#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

uniform float timeFactor;

void main() {

	vec4 color = 0.7 * texture2D(uSampler, vTextureCoord) + 0.3 * texture2D(uSampler3, vec2(0, 1.0- texture2D(uSampler2, vTextureCoord).b));
	
	gl_FragColor = color;
}