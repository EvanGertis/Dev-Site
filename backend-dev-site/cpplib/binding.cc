#include <node.h>
#include <v8.h>

void Sum(const v8::FunctionCallbackInfo<v8::Value>& args)
{
	v8::Isolate* isolate = args.GetIsolate();
	int i = 0;

	auto total = i + 69;
	args.GetReturnValue().Set(total);
}
void Initialize(v8::Local<v8::Object> exports)
{
	NODE_SET_METHOD(exports, "sum", Sum);
}
NODE_MODULE(addon, Initialize);