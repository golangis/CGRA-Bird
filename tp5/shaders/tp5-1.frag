#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;


void main() {
	vec4 color=vec4(0.0, 0.0, 0.6, 1.0);

	if (coords.y > 0.5)
		color=vec4(0.9, 0.9, 0.0, 1.0);

    color.r = color.r * 0.299 + color.g * 0.687 + color.b * 0.114;
    color.g = color.r * 0.299 + color.g * 0.687 + color.b * 0.114;
    color.b = color.r * 0.299 + color.g * 0.687 + color.b * 0.114;
	
	gl_FragColor = color;
}
